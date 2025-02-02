export type Operator = 'add' | 'subtract' | 'multiply' | 'divide';

export function calculate(
  operator: Operator,
  operand_X: number,
  operand_Y: number
): number {
  if (typeof operand_X !== 'number' || typeof operand_Y !== 'number') {
    throw new Error('Operands must be number');
  }

  switch (operator) {
    case 'add':
      return operand_X + operand_Y;
    case 'subtract':
      return operand_X - operand_Y;
    case 'divide': {
      if (operand_X > 0 && operand_Y === 0) {
        throw new Error('Divison by zero');
      }

      return operand_X / operand_Y;
    }
    case 'multiply':
      return operand_X * operand_Y;
    default:
      throw new Error('Invalid operator');
  }
}
