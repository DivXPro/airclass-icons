// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeadphoneFillSvg from '@airclass/icons-svg/lib/asn/HeadphoneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeadphoneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneFillSvg}></AntdIcon>;
};

HeadphoneFill.displayName = 'HeadphoneFill';
HeadphoneFill.inheritAttrs = false;
export default HeadphoneFill;