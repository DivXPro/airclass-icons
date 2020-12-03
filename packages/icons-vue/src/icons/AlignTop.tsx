// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlignTopSvg from '@airclass/icons-svg/lib/asn/AlignTop';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignTop = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignTopSvg}></AntdIcon>;
};

AlignTop.displayName = 'AlignTop';
AlignTop.inheritAttrs = false;
export default AlignTop;