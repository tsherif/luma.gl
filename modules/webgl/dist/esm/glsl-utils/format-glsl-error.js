import getShaderName from './get-shader-name';
import getShaderTypeName from './get-shader-type-name';
export default function formatGLSLCompilerError(errLog, src, shaderType) {
  var _parseGLSLCompilerErr = parseGLSLCompilerError(errLog, src, shaderType),
      shaderName = _parseGLSLCompilerErr.shaderName,
      errors = _parseGLSLCompilerErr.errors,
      warnings = _parseGLSLCompilerErr.warnings;

  return "GLSL compilation error in ".concat(shaderName, "\n\n").concat(errors, "\n").concat(warnings);
}
export function parseGLSLCompilerError(errLog, src, shaderType, shaderName) {
  var errorStrings = errLog.split(/\r?\n/);
  var errors = {};
  var warnings = {};
  var name = shaderName || getShaderName(src) || '(unnamed)';
  var shaderDescription = "".concat(getShaderTypeName(shaderType), " shader ").concat(name);

  for (var i = 0; i < errorStrings.length; i++) {
    var errorString = errorStrings[i];

    if (errorString.length <= 1) {
      continue;
    }

    var segments = errorString.split(':');
    var type = segments[0];
    var line = parseInt(segments[2], 10);

    if (isNaN(line)) {
      throw new Error("GLSL compilation error in ".concat(shaderDescription, ": ").concat(errLog));
    }

    if (type !== 'WARNING') {
      errors[line] = errorString;
    } else {
      warnings[line] = errorString;
    }
  }

  var lines = addLineNumbers(src);
  return {
    shaderName: shaderDescription,
    errors: formatErrors(errors, lines),
    warnings: formatErrors(warnings, lines)
  };
}

function formatErrors(errors, lines) {
  var message = '';

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    if (!errors[i + 3] && !errors[i + 2] && !errors[i + 1]) {
      continue;
    }

    message += "".concat(line, "\n");

    if (errors[i + 1]) {
      var error = errors[i + 1];
      var segments = error.split(':', 3);
      var type = segments[0];
      var column = parseInt(segments[1], 10) || 0;
      var err = error.substring(segments.join(':').length + 1).trim();
      message += padLeft("^^^ ".concat(type, ": ").concat(err, "\n\n"), column);
    }
  }

  return message;
}

function addLineNumbers(string) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var delim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ': ';
  var lines = string.split(/\r?\n/);
  var maxDigits = String(lines.length + start - 1).length;
  return lines.map(function (line, i) {
    var lineNumber = i + start;
    var digits = String(lineNumber).length;
    var prefix = padLeft(lineNumber, maxDigits - digits);
    return prefix + delim + line;
  });
}

function padLeft(string, digits) {
  var result = '';

  for (var i = 0; i < digits; ++i) {
    result += ' ';
  }

  return "".concat(result).concat(string);
}
//# sourceMappingURL=format-glsl-error.js.map