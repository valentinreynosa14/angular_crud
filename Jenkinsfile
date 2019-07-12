pipeline{
    agent any
        stages{
            stage('Build'){
                steps{
                    echo 'Hi i am working in my pipeline'

                    sh '''
                        whoami
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
            stage('Static Code Analysis') {
                steps{
                    echo 'running static code analysis'
                    sh '''
                        whoami
                        pwd
                        ng lint --fix=true

                    '''
                }
            }
            stage(){
                steps{
                    echo 'running unit test'
                    sh '''
                        ng test
                    '''
                }
            }
            stage('Deploy') {
                steps{
                    echo 'Deploy the content to the DEV enviroment'
                    sh '''
                        ssh jenkins@3.17.179.193 'rm -rf /home/jenkins/angular_pipeline/dist'
                        ssh jenkins@3.17.179.193 'mkdir -p /home/jenkins/angular_pipeline/'
                        rsync -azvh -P /var/lib/jenkins/workspace/angular_pipeline  jenkins@3.17.179.193:/home/jenkins
                    '''
                }
            }            
        }
}