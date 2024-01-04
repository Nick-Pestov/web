export class Tag {
static readonly ANGULAR = new Tag('Angular', '#dd1b16 ');
static readonly JAVA = new Tag('Java', '#f89820');
static readonly PYTHON = new Tag('Python', '#FFD43B');
static readonly TYPESCRIPT = new Tag('TypeScript', '#007acc');
static readonly FLUTTER = new Tag('Flutter', '#027DFD');
static readonly NODEJS = new Tag('NodeJS', '#68a063');
static readonly JAVASCRIPT = new Tag('JavaScript', '#F0DB4F');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}