import Link from 'next/link';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CameraIcon from '@material-ui/icons/Camera';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PersonIcon from '@material-ui/icons/Person';

const concurs = () => {
  return (
    <main>
      <section
        style={{
          color: 'var(--primary-color)',
          width: '80%',
          margin: '2rem auto',
        }}
      >
        <Link href={`/`}>
          <Button color="primary">
            <ArrowBackIosIcon fontSize="small" /> Enrere
          </Button>
        </Link>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              style={{
                color: 'var(--primary-color)',
              }}
              variant="h2"
              component="h1"
            >
              3er CONCURS FOTOGRÀFIC
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Us animem a participar en el 3er concurs fotogràfic de la Farmàcia
              del Mar. L'objectiu del concurs és aconseguir una magnífica
              col·lecció de fotografies. Les fotografies guanyadores formaran
              part del calendari "Salut i Benestar" 2022 de la Farmàcia del Mar.
            </Typography>
            <Typography variant="body1">
              Aquest calendari l'obsequiarem durant les properes Festes
              Nadalenques.(*)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                color: 'var(--secondary-color)',
              }}
              variant="h3"
              component="h2"
            >
              Tu ets protagonista!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Link href="/2021/upload">
              <Button variant="contained" color="secondary">
                Vull participar
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={5}>
            <a href="#bases" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="primary">
                Bases del concurs
              </Button>
            </a>
          </Grid>
          <Grid item xs={12}>
            <Image
              src={`/media/img/IMG_WEB_CONCURSO FOTO_V3.webp`}
              width={100}
              height={35}
              layout="responsive"
              alt="3ª photocontest 2021"
            />
          </Grid>
        </Grid>
      </section>
      <Divider
        style={{
          color: 'var(--primary-color)',
          width: '80%',
          margin: '2rem auto',
        }}
      />
      <section
        id="bases"
        style={{
          color: 'var(--primary-color)',
          width: '80%',
          margin: '2rem auto',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h3">
              Bases del Concurs
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Participants:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                Podrà participar qualsevol persona amb un màxim de 3 fotos
                enviades per persona.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Temàtica:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                La fotografia ha d'il.lustrar i/o inspirar el concepte: "Salut i
                Benestar".
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Qualitat:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                Només s’acceptaran fotografies amb resolució suficient per ser
                reproduïdes a tamany DIN A4 en format horitzontal.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CameraIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">
                      Si una imatge no té bona resolució no podrà participar en
                      el concurs.
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CameraIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">
                      No s’accepten muntatges ni retocs.
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CameraIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">
                      L’ arxiu enviat ha de ser l’original en format jpg.
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AspectRatioIcon color="error" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" color="error">
                      Important: Fotografia en format Horizontal
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Enviament:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                Les fotografies s’hauran d’enviar mitjançant la nostra web:{' '}
                <a href="https://www.farmaciadelmar.com/2021">
                  www.farmaciadelmar.com/2021
                </a>{' '}
                o bé, pel correu electrònic concurs@farmaciadelmar.com,
                indicant:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <InsertPhotoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">
                      Títol de la fotografia
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">Nom</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">Cognoms o alies</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ContactPhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">telèfon de contacte</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ContactMailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">correu electrònic</Typography>
                  </ListItemText>
                </ListItem>
              </List>
              <Typography variant="body2">
                Per poder gaudir-les tothom, les fotografies es penjaran a la
                pàgina web www.farmaciadelmar.com. El procediment per fer-ho és
                senzill, en cas de dubtes, podeu enviar-nos un correu electrònic
                a salut@farmaciadelmar.com.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Termini:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                El plaç màxim per enviar fotografies, finalitzarà el dia 14 de
                Novembre del 2021 a les 24:00 hores 🕛. Els guanyadors del
                concurs s’anunciaran el dia 29 de Novembre del 2021 mitjançant
                nota de manera individual a cada un dels premiats via
                mail/whatsapp/telèfon, segons ens ho hagi demanat.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Votacions:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                Les votacions es realitzaran mitjançant de la pàgina web
                <a href="https://www.farmaciadelmar.com/2021/vote">
                  www.farmaciadelmar.com/2021/vote
                </a>{' '}
                o presencialment a la Farmàcia on es penjaran les fotografies.
                El termini de votació serà del 15 de Novembre al 28 de Novembre
                del 2021.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Guanyadors:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                Les 12 fotografies (rebudes dins el termini i la qualitat
                sol·licitada) que siguin més votades i d'autor diferents, seran
                les 12 imatges que il·lustraran els 12 mesos de l’any 2022 del
                calendari de la Farmàcia del Mar 2022. Els 12 autors seran
                obsequiats amb un regal.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Drets d’Imatge:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                Els participants accepten cedir a favor de la Farmàcia del Mar,
                els drets de reproducció, distribució i comunicació pública de
                les fotografies guanyadores. La publicació de les fotografies
                guanyadores es farà sempre, citant el seu autor/àlies i el títol
                de la fotografia.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">
                Dades de caràcter personal:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                Les persones que enviïn imatges estan informades que al
                participar en el concurs Fotogràfic, promogut per la titular de
                l’oficina de Farmàcia, en cas de resultar escollides, estan
                d’acord que les seves dades de contacte siguin utilitzades per
                comunicar que han sigut escollides, i que la seva fotografia i
                nom poden aparèixer clarament identificables en les xarxes
                socials de la titular de l’oficina de Farmàcia. Sense aquest
                consentiment no es possible participar en el concurs fotogràfic.
                Els participants estan informats que per exercir els seus drets
                d’accés, rectificació, supressió, portabilitat i la limitació o
                oposició al seu tractament, han de dirigir un escrit a Sílvia
                Ametlla Pallí, titular de l’oficina de Farmàcia del Mar, a
                l’adreça a baix detallada o per correu electrònic a
                salut@farmaciadelmar.com Els participants estan informats que
                poden presentar una reclamació davant l’Agència Espanyola de
                Protecció de Dades per l’ús indegut de les dades per part del
                responsable de tractament.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Acceptació:</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2">
                La participació en el concurs implica el coneixement i
                l’acceptació de tots els apartats anteriors de les bases del
                mateix.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </main>
  );
};

export default concurs;
