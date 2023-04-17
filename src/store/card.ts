interface UniqueKey {
    readonly key: string | number | symbol;
}

class UniqueList<T extends UniqueKey> {
    private readonly _list: T[] = [];

    add(item: T): void {
        if (this._list.some(x => x.key === item.key)) {
            throw new Error(`Duplicate key: ${item.key.toString()}`);
        }
        this._list.push(item);
    }

    remove(item: T): void {
        const index = this._list.findIndex(x => x.key === item.key);
        if (index < 0) {
            throw new Error(`Key not found: ${item.key.toString()}`);
        }
        this._list.splice(index, 1);
    }

    index(idx: number): T {
        return this._list[idx];
    }

    get list(): T[] {
        return this._list;
    }
}


class BigCard implements UniqueKey {
    questionIdx: number = 0;
    totalPoints: number = 0;
    givenPoints: number = 0;
    comment: string = '';
    controller: BigCardController = new BigCardController();
    subCards: SmallCard[] = [];


    constructor(questionIdx: number, totalPoints: number, givenPoints: number, comment: string) {
        this.questionIdx = questionIdx;
        this.totalPoints = totalPoints;
        this.controller.totalPointInput = this.totalPoints.toString();
        this.givenPoints = givenPoints;
        this.controller.givenPointInput = this.givenPoints.toString();
        this.comment = comment;
    }

    get key(): number {
        return this.questionIdx;
    }
}

class BigCardController {
    isShowInput: boolean = false;
    isPullDown: boolean = false;
    totalPointEditable: boolean = false;
    totalPointInput: string = '';
    givenPointEditable: boolean = false;
    givenPointInput: string = '';
}

class SmallCard {
    parentCard: BigCard | null = null;
    sign: string = ''
    points: number = 0;
    comment: string = '';
    controller: SmallCardController = new SmallCardController();

    constructor(parentCard: BigCard | null, sign: string, points: number, comment: string) {
        this.parentCard = parentCard;
        this.sign = sign;
        this.points = points;
        this.controller.pointInput = this.points.toString();
        this.comment = comment;
    }
}

class SmallCardController {
    isSmallActive: boolean = false;
    isShowInput: boolean = false;
    pointEditable: boolean = false;
    pointInput: string = '';
}

export {UniqueList, BigCard, SmallCard}
