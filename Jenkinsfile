pipeline{
    agent any
        stages{
            stage('Build'){
                steps{
                    echo 'Hi i am working in my pipeline'

                    sh '''  
                        sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
                        sudo apt-get install nodejs -y
                        node -v; npm -v
                        sudo npm install -g @angular/cli -y
                        git pull
                        ls
                        ng build --prod
                        ls
                    '''
                }
            }
        }
}