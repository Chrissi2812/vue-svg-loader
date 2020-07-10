import svgToVue from 'svg-to-vue';
import { getOptions } from 'loader-utils';

export default function (content) {
  const callback = this.async();
  const { svgo } = getOptions(this) || {};

  svgToVue(content, {
    svgoPath: this.resourcePath,
    svgoConfig: svgo,
  })
    .then(component => callback(null, component))
    .catch(callback);
};
