// index.js
/**
 * Super Toolkit - Export Semua Modul Umum
 * Cocok dipakai di Termux, VPS, atau Panel Hosting.
 * Mode: CommonJS (require)
 */

// Module HTTP Request
const fetch = require("node-fetch");
const axios = require("axios");
const request = require("request");
const got = require("got");

// Module File System & Path
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const stream = require("stream");
const zlib = require("zlib");

// Module System & Exec
const os = require("os");
const util = require("util");
const { exec, execSync, spawn } = require("child_process");

// Module Upload & Media
const FormData = require("form-data");
const { fileTypeFromBuffer } = require("file-type");
const mime = require("mime-types");

// Module Env Config
const dotenv = require("dotenv");
const yaml = require("js-yaml");

// Module Crypto & Security
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Module Database
const sqlite3 = require("sqlite3");
const { Database } = require("sqlite3");
const { MongoClient } = require("mongodb");
const mysql = require("mysql2/promise");

// Module Time & Date
const moment = require("moment");
const dayjs = require("dayjs");

// Module Web Server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Module WebSocket & Realtime
const WebSocket = require("ws");
const EventEmitter = require("events");
const socketio = require("socket.io");

// Module HTML & Web Scraping
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const playwright = require("playwright");
const jsdom = require("jsdom");

// Module CLI Tools
const chalk = require("chalk");
const ora = require("ora");
const figlet = require("figlet");
const inquirer = require("inquirer");

// Module File Compress & Archive
const archiver = require("archiver");
const unzipper = require("unzipper");
const tar = require("tar");

// Module Utils
const lodash = require("lodash");
const uuid = require("uuid");
const qs = require("qs");
const sharp = require("sharp");

// Module Bot / Chat API (Opsional)
const TelegramBot = require("node-telegram-bot-api");
// const { default: makeWASocket } = require("@adiwajshing/baileys");

// Export Semua Module Yang di  Perlukan Ya Wak Geng🗿
module.exports = {
  // HTTP
  fetch, axios, request, got,

  // File & Path
  fs, path, fse, stream, zlib,

  // System
  os, util, exec, execSync, spawn,

  // Upload & Media
  FormData, fileTypeFromBuffer, mime,

  // Env & Config
  dotenv, yaml,

  // Crypto & Security
  crypto, bcrypt, jwt,

  // Database
  sqlite3, Database, MongoClient, mysql,

  // Time & Date
  moment, dayjs,

  // Web Server
  express, cors, bodyParser, morgan,

  // Realtime
  WebSocket, EventEmitter, socketio,

  // Scraping
  cheerio, puppeteer, playwright, jsdom,

  // CLI Tools
  chalk, ora, figlet, inquirer,

  // Archive & Compress
  archiver, unzipper, tar,

  // Utils
  lodash, uuid, qs, sharp,

  // Bots
  TelegramBot,
  // makeWASocket,
};
