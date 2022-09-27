FROM node:16.14.2
WORKDIR /200_OK
COPY . .
WORKDIR /200_OK/react-frontend
RUN npm install
RUN npm run build
WORKDIR /200_OK/server
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]