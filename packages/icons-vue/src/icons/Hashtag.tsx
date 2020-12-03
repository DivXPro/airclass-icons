// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HashtagSvg from '@airclass/icons-svg/lib/asn/Hashtag';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Hashtag = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagSvg}></AntdIcon>;
};

Hashtag.displayName = 'Hashtag';
Hashtag.inheritAttrs = false;
export default Hashtag;