// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThunderstormsFillSvg from '@airclass/icons-svg/lib/asn/ThunderstormsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThunderstormsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThunderstormsFillSvg}></AntdIcon>;
};

ThunderstormsFill.displayName = 'ThunderstormsFill';
ThunderstormsFill.inheritAttrs = false;
export default ThunderstormsFill;