class Heroi {
    private String tipo;
    private String nome;
    private int idade;

    public Heroi(String tipo, String nome, int idade) {
        this.tipo = tipo;
        this.nome = nome;
        this.idade = idade;
    }

    public void atacar() {
        System.out.println("O " + tipo + " " + this.nome + " de " + idade + " atacou usando um ataque genérico!");
  }
}