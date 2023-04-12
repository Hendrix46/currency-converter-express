export const ObjectToPairs = (obj, keyName, valueName)=> Object.keys(obj).map(key => {
    return { [valueName]: key, [keyName]: obj[key] , key };
});

