public class Calculator {

    /*
This is an Abacus that is used to slide beads around and do math.
It was created by Laura in 2019.
*/

    public Calculator() {

    }

    public int add(int a, int b)  {
            return a + b;
    }

    public int subtract(int a, int b)  {
            return a - b;
    }

    public int multiply(int a, int b)  {
            return a * b;
    }

    public int divide(int a, int b)  {
            return a / b;
    }

    public int modulo(int a, int b)  {
            return a % b;
    }

    public static void main(String[] args) {
            System.out.println(add(5,7));
            System.out.println(45,11);
            System.out.println(12,34);
    }
}