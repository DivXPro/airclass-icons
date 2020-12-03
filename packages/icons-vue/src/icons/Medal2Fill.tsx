// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Medal2FillSvg from '@airclass/icons-svg/lib/asn/Medal2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Medal2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Medal2FillSvg}></AntdIcon>;
};

Medal2Fill.displayName = 'Medal2Fill';
Medal2Fill.inheritAttrs = false;
export default Medal2Fill;