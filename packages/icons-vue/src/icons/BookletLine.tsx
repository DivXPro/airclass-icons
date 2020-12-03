// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookletLineSvg from '@airclass/icons-svg/lib/asn/BookletLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookletLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookletLineSvg}></AntdIcon>;
};

BookletLine.displayName = 'BookletLine';
BookletLine.inheritAttrs = false;
export default BookletLine;