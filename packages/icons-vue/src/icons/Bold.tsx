// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BoldSvg from '@airclass/icons-svg/lib/asn/Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Bold = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoldSvg}></AntdIcon>;
};

Bold.displayName = 'Bold';
Bold.inheritAttrs = false;
export default Bold;