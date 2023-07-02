export class Mock {
    private data: any[] = []
    constructor() {
        for (let index = 0; index < 50000; index++) {
            const element = index;
            this.data.push({
                name: 'name' + index,
                id: index
            })
            
        }
        console.log(this.data)
    }


    public getPage(currentPage:number, pagesize: number) {
        let data = []
        data = this.data.slice((currentPage - 1) * pagesize, (currentPage - 1) * pagesize + pagesize)
        console.log('这是打印')
        console.log(currentPage)
        console.log(pagesize)
        console.log(data)
        let total = {
            data,
            total: this.data.length
        }

        return data
    }
}