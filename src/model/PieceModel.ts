import {PlayerColor} from './PlayerModel';



export enum PieceType {
    PAWN = 'PAWN',
    NIGHT = 'NIGHT',
    BISHOP = 'BISHOP',
    ROCK = 'ROCK',
    QUEEN = 'QUEEN',
    KING = 'KING',
     
}


export default  class PieceModel {
    private readonly type : PieceType;
    private readonly color : PlayerColor;

    constructor( type : PieceType, color: PlayerColor){
        this.type = type;
        this.color = color;
    }
}

const piece = new PieceModel(PieceType.PAWN, PlayerColor.BLACK);
console.log(piece);
