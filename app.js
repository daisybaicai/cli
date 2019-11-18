#! /usr/bin/env node 

// 记得npm link 配置对应的文件路径啊
const program = require('commander')
const inquirer = require('inquirer')
const _ = require('lodash')
const emoji = require('node-emoji');

program
    .command('init')
    .alias('m')
    .description('创建新的模块')
    // .option('--name [moduleName]')
    // .option('--sass', '启用sass')
    // .option('--less', '启用less')
    .action(option => {
        var config = _.assign({
            moduleName: null,
            description: '',
            sass: false,
            less: false
        }, option)
        var promps = []

        if(config.moduleName !== 'string') {
              promps.push({
                type: 'input',
                name: 'moduleName',
                message: '请输入模块名称',
                validate: function (input){
                    if(!input) {
                        return '不能为空'
                    }
                    return true
                }
              })
        } 

        if(config.description !== 'string') {
            promps.push({
                type: 'input',
                name: 'moduleDescription',
                message: '请输入模块描述'
            })
        }

        if(config.sass === false && config.less === false) {
          promps.push({
            type: 'list',
            name: 'cssPretreatment',
            message: '想用什么css预处理器呢',
            choices: [
              {
                name: 'Sass',
                value: 'sass'
              },
              {
                name: 'Less',
                value: 'less'
              }
            ]
          })
        }
        inquirer.prompt(promps).then(function (answers) {
            console.log(emoji.get('rocket'),'你选择了:');
            console.log('名称',answers.moduleName);
            console.log('描述',answers.moduleDescription);
            console.log('css预处理器',answers.cssPretreatment);
        })
    })

program.parse(process.argv)
