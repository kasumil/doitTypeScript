import mkdirp, { Options } from 'mkdirp'
import { fileExists } from "./fileExists"

export const mkdir = (dirname: string): Promise<string> => 
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname)
    if(alreadyExists) resolve(dirname)
    else {
      mkdirp(dirname)
        .then(dirname => resolve(dirname))
        .catch(error => reject(error));
    }
  });