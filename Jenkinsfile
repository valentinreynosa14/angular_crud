pipeline{
    agent any
        stages{
            stage('Build'){
                steps{
                    echo 'Hi i am working in my pipeline'
                    sh "sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -"
                    sh "sudo apt-get install nodejs -y"
                    sh "node -v; npm -v"
                    sh "sudo npm install -g @angular/cli -y"
                }
            }
        }
}