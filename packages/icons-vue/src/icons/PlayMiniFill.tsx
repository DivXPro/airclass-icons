// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayMiniFillSvg from '@airclass/icons-svg/lib/asn/PlayMiniFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayMiniFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayMiniFillSvg}></AntdIcon>;
};

PlayMiniFill.displayName = 'PlayMiniFill';
PlayMiniFill.inheritAttrs = false;
export default PlayMiniFill;