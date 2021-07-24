export default class SFMBufferedReconstruction{
  constructor(bufSize){
    this.BUFFER_SIZE = bufSize;
    this.tracks = new  cv.MatVector();

  }

}
