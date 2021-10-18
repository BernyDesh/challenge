// Function to validate that the message returned from SonarQube is ok
def qualityGateValidation(qg) {
  if (qg.status != 'OK') {
      return true
  }
  return false
}
pipeline {
  agent any

  tools {
      nodejs 'nodejs'
  }

  environment {
      // General Variables for Pipeline
      PROJECT_ROOT = 'myChallenge/app'
      EMAIL_ADDRESS = 'berny.aguayo.tejos@gmail.com'
      REGISTRY = 'bernydehs/mychallenge'
  }

  stages {
      stage('Hello') {
        steps {
          // First stage is a sample hello-world step to verify correct Jenkins Pipeline
          echo 'Hello World, I am a Challenge'
        }
      }
      stage('Checkout') {
        steps {
        // Get Github repo using Github credentials (previously added to Jenkins credentials)
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/BernyDesh/challenge.git']]])        }
      }
      stage('Install dependencies') {
        steps {
          sh 'npm --version'
          sh "cd ${PROJECT_ROOT}; npm install"
        }
      }
      stage('Build docker-image') {
        steps {
          sh "cd ./${PROJECT_ROOT};docker build -t ${REGISTRY}:${BUILD_NUMBER} . "
        }
      }
      stage('Deploy docker-image') {
        steps {
          // If the Dockerhub authentication stopped, do it again
          sh 'docker login'
          sh "docker push ${REGISTRY}:${BUILD_NUMBER}"
        }
      }
  }
}
