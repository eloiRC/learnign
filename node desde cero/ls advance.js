import fs from 'node:fs/promises'
import path from 'node:path'
import pc from 'picocolors'

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder) // await: necesitem la llista de fitxer per poder continuar.
  } catch {
    console.error(pc.red('Error al leer el directorio: ', folder))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // informacion del archivo
    } catch {
      console.error('no se pudo leer el archivo')
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'D' : 'F'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType.padEnd(2)} ${pc.blue(file.padEnd(20))} ${pc.bgMagenta(fileSize.toString().padStart(10))} ${pc.green(fileModified)}` // padEnd(20) sempre ocupa 20 espais, padStart(10) per deixar 10 epais
  })

  const filesInfo = await Promise.all(filePromises) // await a que es cumpleixin totes les promeses

  filesInfo.forEach(filesInfo => console.log(filesInfo))
}

ls(folder)
