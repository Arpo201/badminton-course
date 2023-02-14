FROM node:19-alpine3.16

# Update for improve security
RUN apk update && apk upgrade

# Add user
RUN addgroup -S -g 1001 arpo && adduser -S -u 1001 arpo -G arpo -D
WORKDIR /home/arpo/app
RUN chown -R arpo:arpo .
USER arpo

COPY --chown=arpo:arpo package.json .
RUN npm install --force
COPY --chown=arpo:arpo . .
EXPOSE 4000

CMD ["node", "index.js"]