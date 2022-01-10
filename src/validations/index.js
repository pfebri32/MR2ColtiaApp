const error = (name, message) => ({name, message});

export const validate = (body, schema) => {
  for (const key in schema) {
    const setups = schema[key];
    for (const setup in setups) {
      const config = setups[setup];
      const value = body[key];
      switch (setup) {
        case 'max':
          switch (typeof value) {
            case 'number':
              if (value > config)
                return error(key, `Your ${key} should be less than ${config}.`);
              break;
            default:
              if (value.length > config) {
                if (typeof value === 'string')
                  return error(
                    key,
                    `Your ${key} should be shorter than ${config} characters.`,
                  );
                return error(key, `Your ${key} should be less than ${config}.`);
              }
          }
          continue;
        case 'min':
          switch (typeof value) {
            case 'number':
              if (value < config)
                return error(key, `Your ${key} should be more than ${config}.`);
              break;
            default:
              if (value.length < config) {
                if (typeof value === 'string')
                  return error(
                    key,
                    `Your ${key} should be longer than ${config} characters.`,
                  );
                return error(key, `Your ${key} should be more than ${config}.`);
              }
          }
          continue;
        case 'require':
          if (config) {
            if (!value) return error(key, `Please enter your ${key}.`);
            if (value === '') return error(key, `Please enter your ${key}.`);
          }
          continue;
        case 'type':
          if (typeof value !== config)
            return error(key, `Your ${key} is not valid!`);
          continue;
      }
    }
  }
};
