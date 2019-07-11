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
                        npm install
                        ls
                        ng build --prod
                        ls
                    '''
                }
            }
            stage('Sonarqube') {
                environment {
                    scannerHome = tool 'SonarQubeScanner'
                }
                steps {
                    withSonarQubeEnv('sonarqube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                    timeout(time: 10, unit: 'MINUTES') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }            
        }
}