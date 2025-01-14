import path from 'node:path'

console.log(path.sep)// indica quin tipus de barra utilitza el OS que estem per der la saparcio de carpetas / o \

// unir rutas con path join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// arxiu base del path
const base = path.basename(filePath)
console.log(base)

// nom del arxiu extreient la extensio
const filename = path.basename(filePath, '.txt')
console.log(filename)

// extreure l'extensio del fitxer
const extensionName = path.extname(filePath)
console.log(extensionName)
