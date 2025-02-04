export function calculateDiscount(price: number, isPremium: boolean): number {
  return new CalculateDiscount(isPremium).calculate(price);
}

enum Kind {
  PREMIUM = 'PREMIUM',
  REGULAR = 'REGULAR'
}

interface IDiscount {
  greaterThanThreshold: number;
  lessOrEqualThreshold: number;
  threshold: number;
}

interface DefineDiscount {
  getDiscount(
    greaterThanThreshold: number,
    lessOrEqualThreshold: number
  ): IDiscount;
}

class MainKind implements DefineDiscount {
  protected readonly threshold: number;

  constructor(threshold = 100) {
    this.threshold = threshold;
  }

  getDiscount(
    greaterThanThreshold: number,
    lessOrEqualThreshold: number
  ): IDiscount {
    return {
      threshold: this.threshold,
      greaterThanThreshold,
      lessOrEqualThreshold
    };
  }
}

class PremiumKind extends MainKind {
  getDiscount(): IDiscount {
    return super.getDiscount(0.8, 0.9);
  }
}

class RegularKind extends MainKind {
  getDiscount(): IDiscount {
    return super.getDiscount(0.9, 1);
  }
}

class InvalidKindError {
  constructor() {
    throw new Error('Invalid kind');
  }
}

class Discount {
  getDiscountByKind(kind: Kind): IDiscount {
    switch (kind) {
      case Kind.PREMIUM:
        return new PremiumKind().getDiscount();
      case Kind.REGULAR:
        return new RegularKind().getDiscount();
      default:
        throw new InvalidKindError();
    }
  }
}

interface ICalculateDiscount {
  calculate(price: number): number;
}

class CalculateDiscount implements ICalculateDiscount {
  private readonly discount: IDiscount;

  constructor(isPremium: boolean) {
    const kind = isPremium ? Kind.PREMIUM : Kind.REGULAR;
    this.discount = new Discount().getDiscountByKind(kind);
  }

  calculate(price: number): number {
    const multiplier =
      price > this.discount.threshold
        ? this.discount.greaterThanThreshold
        : this.discount.lessOrEqualThreshold;

    return price * multiplier;
  }
}
