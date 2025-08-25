// index.js
const os = require("os");
const isTermux = os.platform() === "android";

const fetch = require("node-fetch");
const axios = require("axios");
const request = require("request");
const got = require("got");

const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const stream = require("stream");
const zlib = require("zlib");

const util = require("util");
const { exec, execSync, spawn } = require("child_process");

const FormData = require("form-data");
const { fileTypeFromBuffer } = require("file-type");
const mime = require("mime-types");

const dotenv = require("dotenv");
const yaml = require("js-yaml");

const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { MongoClient } = require("mongodb");
const mysql = require("mysql2/promise");

const moment = require("moment");
const dayjs = require("dayjs");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const WebSocket = require("ws");
const EventEmitter = require("events");

const cheerio = require("cheerio");
const jsdom = require("jsdom");
let puppeteer = null;
let playwright = null;
if (!isTermux) {
  puppeteer = require("puppeteer");
  playwright = require("playwright");
}

const chalk = require("chalk");
const ora = require("ora");
const figlet = require("figlet");
const inquirer = require("inquirer");

const archiver = require("archiver");
const unzipper = require("unzipper");
const tar = require("tar");

const lodash = require("lodash");
const uuid = require("uuid");
const qs = require("qs");

const TelegramBot = require("node-telegram-bot-api");

module.exports = {
  isTermux,
  fetch, axios, request, got,
  fs, path, fse, stream, zlib,
  os, util, exec, execSync, spawn,
  FormData, fileTypeFromBuffer, mime,
  dotenv, yaml,
  crypto, bcrypt, jwt,
  MongoClient, mysql,
  moment, dayjs,
  express, cors, bodyParser, morgan,
  WebSocket, EventEmitter,
  cheerio, jsdom, puppeteer, playwright,
  chalk, ora, figlet, inquirer,
  archiver, unzipper, tar,
  lodash, uuid, qs,
  TelegramBot,
};
