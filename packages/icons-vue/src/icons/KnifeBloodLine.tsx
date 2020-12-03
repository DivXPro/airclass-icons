// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KnifeBloodLineSvg from '@airclass/icons-svg/lib/asn/KnifeBloodLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KnifeBloodLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KnifeBloodLineSvg}></AntdIcon>;
};

KnifeBloodLine.displayName = 'KnifeBloodLine';
KnifeBloodLine.inheritAttrs = false;
export default KnifeBloodLine;