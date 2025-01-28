import PieceModel from "./PieceModel";


export default class SquareModel {
    private readonly row : number;
    private readonly column: number;
    private piece : PieceModel;
    
    constructor(row : number, column : number){
        this.row = row;
        this.column = column;
    }

    setPiece(piece : PieceModel){
        this.piece = piece;
    }
}