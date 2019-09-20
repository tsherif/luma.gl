export default "\nuniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\n    vec3 halfway_direction = normalize(light_direction + view_direction);\n    float lambertian = dot(light_direction, normal_worldspace);\n    float specular = 0.0;\n    if (lambertian > 0.0) {\n      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\n      specular = pow(specular_angle, lighting_uShininess);\n    }\n    lambertian = max(lambertian, 0.0);\n    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = surfaceColor;\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = vec3(0, 0, 0);\n  vec3 surfaceColor = vec3(0, 0, 0);\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n";
//# sourceMappingURL=phong-lighting.glsl.js.map