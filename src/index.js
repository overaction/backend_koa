const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//라우터 설정
router.get('/', ctx => {
    ctx.body = '홈';
});
router.get('/about/:nm?', ctx => {
    const {nm} = ctx.params;
    //name의 존재 유무에 따라 다른 결과 출력
    ctx.body = nm ? `${nm}의 소개` : '소개';
});

router.get('/posts',ctx => {
    const {idd} = ctx.query;
    //id의 존재 유무에 따라 다른 결과 출력
    ctx.body = idd ? `포스트 #${idd}` : '포스트 아이디가 없습니다.';
})

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});