import {
  MyTaskWrapper,
  FloatSection,
  SpecialText,
  Title,
  FloatBox,
  Text,
  FloatBoxSecond,
  TextSecond,
  PositionSection,
  PositionedText,
  TextWithSticky,
  DefinitionList,
  DefinitionTerm,
  DefinitionDescription,
  FlexBoxSection,
  FlexBoxWrapper,
  BoxBlock,
  ArticleSection,
  Article,
  BoxBlockGrid,
  GridBoxWrapper,
  GridBoxWrapperPepeat,
  ViewportBox,
  ElementViewport,
} from "./styles";

function MyTask_07() {
  return (
    <>
      <MyTaskWrapper>
        <FloatSection>
          <Title>Float</Title>
          <FloatBox>Float Box</FloatBox>
          <SpecialText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet.
          </SpecialText>
          <Text>
            Sed auctor cursus massa at porta. Integer ligula ipsum, tristique
            sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
            neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam
            erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
            sollicitudin eros pharetra congue. Duis ornare egestas augue ut
            luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
            ornare felis, eget fermentum sapien.
          </Text>

          <TextSecond>
            <FloatBoxSecond>Float Box</FloatBoxSecond>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est. Nam id risus quis ante semper consectetur
            eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
            suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus
            eu urna eget velit cursus viverra quis vestibulum sem. Aliquam
            tincidunt eget purus in interdum. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </TextSecond>
        </FloatSection>

        <PositionSection>
          <Title>Sticky positioning</Title>
          <TextWithSticky>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
            ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
            volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
            sollicitudin eros pharetra congue. Duis ornare egestas augue ut
            luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
            ornare felis, eget fermentum sapien.
            <PositionedText>Sticky text</PositionedText>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est. Nam id risus quis ante semper consectetur
            eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
            suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus
            eu urna eget velit cursus viverra quis vestibulum sem. Aliquam
            tincidunt eget purus in interdum. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
            dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
            pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet
            nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
            at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
            egestas ligula. Curabitur vehicula tellus neque, ac ornare ex
            malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
            Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
            pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
            quam nec lacus varius commodo et a urna. Ut id ornare felis, eget
            fermentum sapien.
          </TextWithSticky>
        </PositionSection>

        <PositionSection>
          <Title>Sticky positioning 2 - Definition List</Title>
          <TextWithSticky>
            <DefinitionList>
              <DefinitionTerm>A</DefinitionTerm>
              <DefinitionDescription>Apple</DefinitionDescription>
              <DefinitionDescription>Ant</DefinitionDescription>
              <DefinitionDescription>Altimeter</DefinitionDescription>
              <DefinitionDescription>Airplane</DefinitionDescription>
              <DefinitionTerm>B</DefinitionTerm>
              <dd>Bird</dd>
              <dd>Buzzard</dd>
              <dd>Bee</dd>
              <dd>Banana</dd>
              <dd>Beanstalk</dd>
              <DefinitionTerm>C</DefinitionTerm>
              <dd>Calculator</dd>
              <dd>Cane</dd>
              <dd>Camera</dd>
              <dd>Camel</dd>
              <DefinitionTerm>D</DefinitionTerm>
              <dd>Duck</dd>
              <dd>Dime</dd>
              <dd>Dipstick</dd>
              <dd>Drone</dd>
              <DefinitionTerm>E</DefinitionTerm>
              <dd>Egg</dd>
              <dd>Elephant</dd>
              <dd>Egret</dd>
              <dd>Enamy</dd>
              <dd>Eddy</dd>
              <dd>Eddy</dd>
              <dd>Erdbarry</dd>
            </DefinitionList>
          </TextWithSticky>
        </PositionSection>

        <FlexBoxSection>
          <Title>Flex Wrap</Title>
          <FlexBoxWrapper>
            <BoxBlock>1</BoxBlock>
            <BoxBlock>2</BoxBlock>
            <BoxBlock>3</BoxBlock>
            <BoxBlock>4</BoxBlock>
            <BoxBlock>5</BoxBlock>
          </FlexBoxWrapper>
        </FlexBoxSection>

        <Title>Flexible sizing of flex items</Title>
        <ArticleSection>
          <Article>
            <h2>First article</h2>

            <p>
              Tacos actually microdosing, pour-over semiotics banjo chicharrones
              retro fanny pack portland everyday carry vinyl typewriter. Tacos
              PBR&B pork belly, everyday carry ennui pickled sriracha normcore
              hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
              trust fund twee, leggings salvia iPhone photo booth health goth
              gastropub hammock.
            </p>
          </Article>

          <Article>
            <h2>Second article</h2>

            <p>
              Tacos actually microdosing, pour-over semiotics banjo chicharrones
              retro fanny pack portland everyday carry vinyl typewriter. Tacos
              PBR&B pork belly, everyday carry ennui pickled sriracha normcore
              hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
              trust fund twee, leggings salvia iPhone photo booth health goth
              gastropub hammock.
            </p>
          </Article>

          <Article>
            <h2>Third article</h2>

            <p>
              Tacos actually microdosing, pour-over semiotics banjo chicharrones
              retro fanny pack portland everyday carry vinyl typewriter. Tacos
              PBR&B pork belly, everyday carry ennui pickled sriracha normcore
              hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
              trust fund twee, leggings salvia iPhone photo booth health goth
              gastropub hammock.
            </p>

            <p>
              Cray food truck brunch, XOXO +1 keffiyeh pickled chambray
              waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia
              umami wayfarers pickled, asymmetrical kombucha letterpress kitsch
              leggings cold-pressed squid chartreuse put a bird on it. Listicle
              pickled man bun cornhole heirloom art party.
            </p>
          </Article>
        </ArticleSection>

        <FlexBoxSection>
          <Title>CSS grid layout</Title>
          <GridBoxWrapper>
            <BoxBlockGrid>1</BoxBlockGrid>
            <BoxBlockGrid>2</BoxBlockGrid>
            <BoxBlockGrid>3</BoxBlockGrid>
            <BoxBlockGrid>4</BoxBlockGrid>
            <BoxBlockGrid>5</BoxBlockGrid>
          </GridBoxWrapper>
          <ul>
            <li>column-gap for gaps between columns</li>
            <li>row-gap for gaps between rows</li>
            <li>gap as a shorthand for both</li>
          </ul>
          <Title>Grid Repeat</Title>
          <GridBoxWrapperPepeat>
            <BoxBlockGrid>1</BoxBlockGrid>
            <BoxBlockGrid>2</BoxBlockGrid>
            <BoxBlockGrid>3</BoxBlockGrid>
            <BoxBlockGrid>4</BoxBlockGrid>
            <BoxBlockGrid>5</BoxBlockGrid>
          </GridBoxWrapperPepeat>
        </FlexBoxSection>

        <ViewportBox>
          <Title>Viewport</Title>
          <Text>1vw is equal to one percent of the viewport width</Text>
          <Text>
            The problem with doing the above is that the user loses the ability
            to zoom any text set using the vw unit, as that text is always
            related to the size of the viewport. <strong> Therefore you should 
            never set text using viewport units alone </strong>
          </Text>
          <Text>There is a solution, and it involves using calc(). If you add the vw unit to a value set using a fixed size such as ems or rems then the text will still be zoomable. Essentially, the vw unit adds on top of that zoomed value:
          {/* h1 {font-size: calc(1.5rem + 4vw);  */}
          <ElementViewport>Element</ElementViewport>
          </Text>
        </ViewportBox>
      </MyTaskWrapper>
    </>
  );
}

export default MyTask_07;
