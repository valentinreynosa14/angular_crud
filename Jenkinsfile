pipeline{
    agent any
        stages{
            stage('Build'){
                steps{
                    echo 'Hi i am working in my pipeline'

                    sh '''
                        ls
                        sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
                        sudo apt-get install nodejs -y
                        node -v; npm -v
                        sudo npm install -g @angular/cli -y
                        git branch
                        npm install
                        ls
                        ng build --prod
                        ls
                    '''
                }
            }
            stage('Sonarqube') {
                steps{
                    echo 'run static code analysis'
                    sh '''
                        pwd
                        npm install tslint-sonarts --save-dev
                        tslint --type-check --project tsconfig.json -c tslint.json 'src/**/*.ts'
                    '''
                }
            }            
        }
}