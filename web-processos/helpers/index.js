const MODES = {
 CREATE: 'create',
 UPDATE: 'update',
 DELETE: 'delete',
 DISPLAY: 'display',
}

const TYPES = {
  admin: 'admin',
  triador: 'triador',
  finalizador: 'finalizador',
}

const listfy = (obj) => (Object.keys(obj).map(key => obj[key]))

const PATHS = {
  home: '/',
  admin: 'usuarios',
  triador: 'processos',
  finalizador: 'pareceres',
}

export { MODES, TYPES, PATHS, listfy }