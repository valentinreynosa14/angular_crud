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
                        sudo npm install
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
                        ng lint --fix=true

                    '''
                }
            }
            stage('Deploy') {
                steps{
                    echo 'Deploy the content to the DEV enviroment'
                    sh '''
                        su - jenkins 
                        rsync -ratv /var/lib/jenkins/workspace/angular_pipeline jenkins@3.17.179.193:/home/jenkins
                    '''
                }
            }            
        }
}