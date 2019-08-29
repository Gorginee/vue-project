<template>
  <div>
    <div class="news-head">
      <h2 class="title">{{ title }}</h2>
      <p class="info">
        <span>发布时间：{{ pub_time | dateFormat }}</span>
        <span>浏览：{{ view_count }}</span>
      </p>
    </div>

    <div class="news-content" v-html="newsContent"></div>

    <div class="news-comment">
      <comment></comment>
    </div>
  </div>
</template>

<script>
import Comment from './comment.vue'
export default {
  data() {
    return {
      title: "News title",
      pub_time: "2019-08-29 15:16",
      view_count: 888,
      newsContent: `<div class="content-detail">
                        <p style="text-align: center;"><span style="color: rgb(63, 63, 63);"><img src="https://static-image.xfz.cn/1567044404_588.jpg" title="" alt="Picture1.jpg"></span></p><p><span style="color: rgb(63, 63, 63);">据悉，二手时尚电商平台红布林(Plum)近日完成了两千万美金 B+ 轮融资，领投方为某著名美元母基金（该集团为国内多家美元一线基金的LP）和日本最大的人力资源和互联网公司Recruit，Recruit在中国的过往投资案例包括58同城等。老股东经纬中国、启明创投和九合创投等也持续跟投。</span></p><p><span style="color: rgb(63, 63, 63);">红布林(Plum)创立于 2017 年，通过 C2B2C 的模式来切入二手时尚交易。<strong>创始人徐薇表示</strong>，从用户量级、平台GMV等各个维度来看，平台在近半年内实现了5倍的快速增长。团队一段时间以来的业务重点和接下来的规划都放在了服务升级和品牌建设上，足够差异化的货品和平台客单价的提升，是红布林(Plum)接下来的目标。&nbsp;</span></p><p><span style="color: rgb(63, 63, 63);"><strong>服务端的变化主要体现在两个大的方面：</strong><strong>&nbsp;1. 从进一步压缩产品上架时间开始，结合售卖端的技术迭代：</strong>红布林(Plum)要帮助卖家“极速变现”一个共识是，由于主打的奢侈品和轻奢品类，作为卖家的用户其实对于成交价格是有要求的，但徐薇提到，卖家用户除了对产品的收入有要求之外，也会对变现速度提出要求，换句话说就是对于商品能够“卖掉”的感知要更加明确。如果要做到“极速变现”，第一个环节自然是商品从审核到上架的周期需要被缩短。徐薇提到，由于平台业务量的提升，原有处理中心的产能并不能满足供给量的提升，红布林(Plum)甚至经历过“爆仓”，商品上架的最长等待周期被延长到了10天，因此新的处理中心投入使用，平台后端的商品处理量级也会升级到超过10万件/月，商品从收到到上架的周期会被缩短到48小时、甚至24小时内。当商品迅速上架之后，留给平台的自然就是如何解决交易摩擦、保证商品能够被高效卖掉。对于平台所运营的浅库存商品来说，人货之间的精准匹配除了风格偏好之外，也存在支付水平和付费意愿之间的差异，是个极具挑战的问题。这一部分则会交于技术来完成：红布林（Plum）持续积累2年多的数十万量级sku的销售数据，具有很大的应用价值。目前平台已经拥有非常系统的数据埋点，完整跟踪每一个商品从曝光到详情页点击率（ctr）到最终购买转化（cvr）的数据，以及其价格波动数据。在这个基础上，徐薇认为，不论是千人千面，还是动态调节价格，都已经产生了明确的效果。接下来，对于特定品类，平台还会上线“保卖服务”。</span></p><p><span style="color: rgb(63, 63, 63);"><strong>2. 加入直播带货大潮：</strong>极速上架其实是从寄售服务体验的角度来说的，今年5月，在直播电商大风潮下，红布林(Plum)也上线了自己的直播业务，除了在综合平台上直播外，在“红布林” App 端内也上线了直播板块。&nbsp;至于为什么做直播，徐薇给到了两方面的原因：&nbsp;除了直播的带货能力已经被验证这个大背景外，“直播”首先满足的是用户对于短视频内容的消费诉求，相对于标品，和文玩珠宝类似，二手商品的强非标属性“自带内容话题”，自然也适合直播，此外从成本角度考虑，这类高客单的商品也更适合直播。另外一点则在于二手商品的消费其实仍处于一个市场教育期，所以视频化的内容信任感和教育的过程十分必需，作为短视频时代的“电视购物”，直播恰好也能起到教育用户的作用。&nbsp;所以对于红布林(Plum)来说，直播更像是一个比较强的运营和销售工具，帮助团队提升了商品的销售和转化速度，根据团队提供的数据，App端内的直播动销水平能够达到单场50%以上，同时也进一步提高了客单价水平和用户粘性。除了服务细节上的变化外，在平台品牌层面，为了更好的融合国内市场的语言使用环境，借由新一轮融资，红布林(Plum)也进行了一次新的品牌战略升级，全面启用品牌中文名：红布林。无论是服务细节上再优化还是品牌建设，背后的一个大逻辑是，<strong>红布林(Plum)希望在C端建立足够强的影响力。</strong>原因在于，相比B端供给，C端供给是二手时尚品最上游、海量和具有性价比的供给，是在这个行业形成终极壁垒的最核心要素。徐薇称，在综合电商已经相对强势的当下，对于包括二手商品在内的垂类电商，只有能够持续保证货品的强差异性，同时通过客单的提升来补足获客成本。显然，只要牢牢抓住C端供给、和C端形成强粘性的情况下，才有可能实现货品的差异化和客单价的提升（全平台客单1000~2000元）。徐薇认为，从用户体量和供货量上来说，红布林（Plum）已经在 C 端供给上建立了头部能力。相比B端供给，C端供给是二手时尚品最上游、海量和具有性价比的供给，是在这个行业的最核心资产。</span></p><p><span style="color: rgb(63, 63, 63);">关于投资逻辑，Plum 的新老投资人：</span><span style="color: rgb(63, 63, 63);">Recruit</span><span style="color: rgb(63, 63, 63);">中国董事总经理杜淳，九合创投董事总经理华茜、经纬中国合伙人肖敏、启明创投合伙人吴静、</span><span style="color: rgb(63, 63, 63);">IDG</span><span style="color: rgb(63, 63, 63);">资本董事甄志勇、险峰长青合伙人赵阳联合表示，持续看好循环经济及非标品垂直交易平台的机会，红布林</span><span style="color: rgb(63, 63, 63);">(Plum)</span><span style="color: rgb(63, 63, 63);">团队不断坚持完善产品和运营模式，探索和改良产业中的核心环节，一站式</span><span style="color: rgb(63, 63, 63);">fulfillment</span><span style="color: rgb(63, 63, 63);">服务创新和动态定价技术等都构建了极高的运营效率和壁垒，在交易效率和</span><span style="color: rgb(63, 63, 63);">UE</span><span style="color: rgb(63, 63, 63);">模型上持续提升，收获了有增长性和可复制性的效果。经过两年多的快速增长，红布林</span><span style="color: rgb(63, 63, 63);">(Plum)</span><span style="color: rgb(63, 63, 63);">已经成为二手时尚商品交易领域的领先者。我们非常高兴能陪伴团队一起成长。</span></p><div class="news-detail-adv-spe"><a href="https://mp.weixin.qq.com/s?__biz=MzA3OTMxMDUzOQ==&amp;mid=2653786724&amp;idx=1&amp;sn=dc44b42659a93f0b63e2e4c0db0a5543&amp;chksm=846c49c0b31bc0d63a305f7ce20f80f734e70d2085db32fcc2ad368c6da14533b00f48c144a0&amp;token=1130&amp;adf=post.bottom" target="_blank"><img src="https://static-image.xfz.cn/1566441579_661.jpg"></a></div>
                    </div>`
    };
  },
  components: {
    comment: Comment
  }
};
</script>

<style lang="scss">
.news-head {
  padding: 5px 10px;
  .info {
    display: flex;
    justify-content: space-between;
  }
}

.news-content {
  padding: 5px 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>