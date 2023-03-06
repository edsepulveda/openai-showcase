import FileSaver from 'file-saver'

export const downloadIMG = async (_id, photo) => {
  FileSaver.saveAs(photo, `img-${_id}.jpg`)
}
