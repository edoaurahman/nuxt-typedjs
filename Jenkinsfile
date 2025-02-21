pipeline {
  tools {nodejs "node"}
  agent {
    node {
      label 'local'
    }

  }
  stages {
    stage('Install Dependency') {
      steps {
        sh '''echo "Checking node and npm version"
node -v
npm -v'''
        sh '''echo "Install all modules"
npm i'''
      }
    }

    stage('Linter') {
      steps {
        sh '''echo "Check lint"
npm run lint'''
      }
    }

    stage('Build') {
      steps {
        sh '''echo "Build plugin"
npm run prepack'''
      }
    }

    stage('Test') {
      steps {
        sh '''echo "Test Plugin"
npm run test'''
      }
    }

  }
  environment {
    NODEJS_HOME = tool name: \'NodeJS\', type: \'NodeJSInstallation\'
    PATH = 'PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"'
  }
}
