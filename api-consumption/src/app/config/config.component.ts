showConfig(){
    this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        
    } )
}