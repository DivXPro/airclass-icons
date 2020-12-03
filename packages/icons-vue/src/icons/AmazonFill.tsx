// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AmazonFillSvg from '@airclass/icons-svg/lib/asn/AmazonFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AmazonFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AmazonFillSvg}></AntdIcon>;
};

AmazonFill.displayName = 'AmazonFill';
AmazonFill.inheritAttrs = false;
export default AmazonFill;