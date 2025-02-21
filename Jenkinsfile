pipeline {
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
    NODE_ENV = 'production'
  }
}