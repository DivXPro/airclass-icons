// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TwitterFillSvg from '@airclass/icons-svg/lib/asn/TwitterFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitterFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitterFillSvg}></AntdIcon>;
};

TwitterFill.displayName = 'TwitterFill';
TwitterFill.inheritAttrs = false;
export default TwitterFill;