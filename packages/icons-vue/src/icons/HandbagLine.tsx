// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HandbagLineSvg from '@airclass/icons-svg/lib/asn/HandbagLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandbagLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HandbagLineSvg}></AntdIcon>;
};

HandbagLine.displayName = 'HandbagLine';
HandbagLine.inheritAttrs = false;
export default HandbagLine;