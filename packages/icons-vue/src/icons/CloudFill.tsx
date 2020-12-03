// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudFillSvg from '@airclass/icons-svg/lib/asn/CloudFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFillSvg}></AntdIcon>;
};

CloudFill.displayName = 'CloudFill';
CloudFill.inheritAttrs = false;
export default CloudFill;