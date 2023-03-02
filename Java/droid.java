class Droid {

    int batteryLevel;
    String name;

     public String toString() {
    return "Hello, I’m the droid: "+ name;
  }

    public Droid(String droidName) {
        name = droidName;
        batteryLevel = 100;

    }

    public void performTask(String task) {
        System.out.println(name + " is performing task: " + task);
        batteryLevel = batteryLevel - 10;
    }

    public void energyReport() {
        System.out.println("The currnet battery level is: " + batteryLevel);
    }

    public void energyTransfer(Droid a, Droid b) {
        a.batteryLevel = b.batteryLevel;
    }

     public static void main(String[] args) {
        Droid codey = new Droid("Codey");
        System.out.println(codey);
        codey.performTask();
        System.out.println(codey);
     }

}