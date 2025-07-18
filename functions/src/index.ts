import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as express from "express";

export const helloWorld = onRequest(
  {cors: [/things-to-complete\.web\.app/]},
  (request: express.Request, response: express.Response) => {
    logger.info("Hello logs!", {structuredData: true});
    response
      .status(200)
      .send({message: "Hello from Firebase with TypeScript * cors!"});
  }
);
